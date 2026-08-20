from db.models import Country, State, City, InstituteCampus, Institute, User
from db.db import SQLiteDB
from sqlalchemy import or_, and_



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
        elif "country_id" in args or "country" in args:
            country_arg = str(args.get("country_id") or args.get("country") or '').strip()
            c_ids = [c.strip() for c in country_arg.split(',') if c.strip()] if ',' in country_arg else ([country_arg] if country_arg else [])

            country_conds = [
                Country.country_id.in_(c_ids),
                Country.country_name.in_(c_ids),
                or_(*[Country.country_name.ilike(f"%{c}%") for c in c_ids])
            ]
            if hasattr(Country, 'country_code'):
                country_conds.append(getattr(Country, 'country_code').in_(c_ids))

            country_objs = session.query(Country).filter(or_(*country_conds)).all()

            matched_country_ids = [c.country_id for c in country_objs] if country_objs else c_ids
            countries = country_objs if country_objs else session.query(Country).filter(Country.country_id.in_(c_ids)).all()

            states = session.query(State).filter(State.country_id.in_(matched_country_ids)).all()
            state_ids = [s.state_id for s in states]

            if state_ids:
                cities = session.query(City).filter((City.state_id.in_(state_ids)) | (City.country_id.in_(matched_country_ids))).all()
            else:
                cities = session.query(City).filter(City.country_id.in_(matched_country_ids)).all()

            registered_cities = session.query(InstituteCampus.city_name).filter(
                (InstituteCampus.country_id.in_(matched_country_ids)) | (InstituteCampus.country_id.in_(c_ids))
            ).all()

            existing_names = {c.city_name.strip().lower() for c in cities if c.city_name}
            if registered_cities:
                for rc in registered_cities:
                    if rc and rc[0] and rc[0].strip():
                        name = rc[0].strip().title()
                        if name.lower() not in existing_names:
                            existing_names.add(name.lower())
                            cities.append(City(city_id=name, city_name=name))

            if not cities:
                cities = session.query(City).all()
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

