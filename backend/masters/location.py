from db.models import Country, State, City, InstituteCampus, Institute, User
from db.db import SQLiteDB



def get_location_hierarchy_details(request):
    db = SQLiteDB()
    session = db.connect()
    if not session:
        return None

    # Get filter arguments from request.args and apply filters
    countries = []
    states = []
    cities = []
    extra_cities = []
    args = getattr(request, "args", {})
    if args:
        if "institute_id" in args:
            institute_campus = session.query(InstituteCampus).filter(InstituteCampus.institute_id == args["institute_id"]).all()
            if institute_campus:
                country_ids = [campus.country_id for campus in institute_campus]
                countries = session.query(Country).filter(Country.country_id.in_(country_ids)).all()
                state_ids = [campus.state_id for campus in institute_campus]
                states = session.query(State).filter(State.state_id.in_(state_ids)).all()
                city_ids = [campus.city_id for campus in institute_campus]
                if city_ids:
                    cities = session.query(City).filter(City.city_id.in_(city_ids)).all()
                else:
                    cities = session.query(City).filter(City.country_id.in_(country_ids)).all()
        elif "campus_id" in args:
            institute_campus = session.query(InstituteCampus).filter(InstituteCampus.campus_id == args["campus_id"]).first()
            if institute_campus:
                country_ids = [institute_campus.country_id]
                countries = session.query(Country).filter(Country.country_id.in_(country_ids)).all()
                state_ids = [institute_campus.state_id]
                states = session.query(State).filter(State.state_id.in_(state_ids)).all()
                city_ids = [institute_campus.city_id]
                if institute_campus.city_id:
                    cities = session.query(City).filter(
                        City.city_id == institute_campus.city_id
                        ).all()
                if not cities and institute_campus.city_name:
                    extra_cities.append({
                        "id": institute_campus.city_name,
                        "name": institute_campus.city_name,
                        "state_id": institute_campus.state_id
                    })
        elif "country_id" in args:
            country_arg = str(args["country_id"] or '').strip()
            if ',' in country_arg:
                c_ids = [c.strip() for c in country_arg.split(',') if c.strip()]
                countries = session.query(Country).filter(Country.country_id.in_(c_ids)).all()
                states = session.query(State).filter(State.country_id.in_(c_ids)).all()
                registered_cities = session.query(InstituteCampus.city_name).filter(InstituteCampus.country_id.in_(c_ids)).all()
            else:
                countries = session.query(Country).filter(Country.country_id == country_arg).all()
                states = session.query(State).filter(State.country_id == country_arg).all()
                registered_cities = session.query(InstituteCampus.city_name).filter(InstituteCampus.country_id == country_arg).all()
            
            # Deduplicate and title-case
            unique_names = sorted(list({c[0].strip().title() for c in registered_cities if c[0] and c[0].strip()}))
            cities = [City(city_id=name, city_name=name) for name in unique_names]

        elif "state_id" in args:
            states = session.query(State).filter(State.state_id == args["state_id"]).all()
            cities = session.query(City).filter(City.state_id == args["state_id"]).all()
        elif "country" in args:
            countries = session.query(Country).filter(Country.country_id == args["country"]).all()
            # get state_ids from countries
            country_ids = [args["country"]]
            states = session.query(State).filter(State.country_id.in_(country_ids)).all()
            state_ids = [state.state_id for state in states]
            if state_ids:
                cities = session.query(City).filter(City.state_id.in_(state_ids)).all()
            else:
                cities = session.query(City).filter(City.country_id.in_(country_ids)).all()
    else:
        # Flat Structure
        countries = session.query(Country).all()
        states = session.query(State).all()
        cities = session.query(City).all()

    json_data = {
        "countries": [{"id": c.country_id, "name": c.country_name} for c in countries],
        "states": [{"id": s.state_id, "name": s.state_name, "country_id": s.country_id} for s in states],
        "cities": [{"id": ct.city_id, "name": ct.city_name, "state_id": ct.state_id} for ct in cities] + extra_cities,
    }

    json_data = {
        "statusMessage": "User details fetched successfully",
        "status": True,
        "data": json_data
    }
    return json_data, 200


def get_registered_countries_details(request):
    db = SQLiteDB()
    session = db.connect()
    if not session:
        return {"status": False, "statusMessage": "Database connection failed", "data": []}, 500

    try:
        all_countries = session.query(Country).all()
        country_map = {c.country_id: {"code": c.country_id, "name": c.country_name} for c in all_countries}

        registered_ids = set()

        campus_cids = session.query(InstituteCampus.country_id).filter(InstituteCampus.country_id.isnot(None)).distinct().all()
        for cid in campus_cids:
            if cid and cid[0]:
                registered_ids.add(str(cid[0]))

        user_cids = session.query(User.country_id).filter(User.country_id.isnot(None)).distinct().all()
        for cid in user_cids:
            if cid and cid[0]:
                registered_ids.add(str(cid[0]))

        institute_countries = session.query(Institute.country).filter(Institute.country.isnot(None)).distinct().all()
        for ic in institute_countries:
            val = str(ic[0]).strip() if ic and ic[0] else ""
            if val:
                if val in country_map:
                    registered_ids.add(val)
                else:
                    for cid, cobj in country_map.items():
                        if cobj["name"].lower() == val.lower() or cobj["code"].lower() == val.lower():
                            registered_ids.add(cid)

        result = []
        for cid in registered_ids:
            if cid in country_map:
                result.append(country_map[cid])
            else:
                result.append({"code": cid, "name": cid})

        if not result:
            result = list(country_map.values())

        result.sort(key=lambda x: x["name"])

        return {
            "statusMessage": "Registered countries fetched successfully",
            "status": True,
            "data": result
        }, 200
    except Exception as exc:
        return {"status": False, "statusMessage": str(exc), "data": []}, 500
    finally:
        session.close()

