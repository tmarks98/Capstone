from app.models import db, User, Pin, Board, environment, SCHEMA
from sqlalchemy.sql import text




# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', profile_pic='./images/pic(1).jpg',  bio='This is my bio', email='demo@aa.io', password='password')
    marnie = User(
        username='marnie', profile_pic='./images/pic(2).jpg',  bio='This is my bio', email='marnie@aa.io', password='password')
    bobbie = User(
        username='bobbie', profile_pic='./images/pic(3).jpg',  bio='This is my bio', email='bobbie@aa.io', password='password')
    pin1 = Pin(
        user_id='1', body='A breathtaking view of the scenic mountains.', title='Scenic Mountain View', main_pic='./images/pic(4).jpg')
    pin2 = Pin(
        user_id='1', body='A beautiful sunset over the ocean horizon.', title='Sunset Over the Ocean', main_pic='./images/pic(5).jpg')
    pin3 = Pin(
        user_id='1', body='A mesmerizing city skyline at night.', title='City Skyline at Night', main_pic='./images/pic(6).jpg')
    pin4 = Pin(
        user_id='1', body='Relax on this tropical beach paradise.', title='Tropical Beach Paradise', main_pic='./images/pic(7).jpg')
    pin5 = Pin(
        user_id='1', body='Enjoy the vibrant colors of the autumn forest.', title='Autumn Forest Colors', main_pic='./images/pic(8).jpg')
    pin6 = Pin(
        user_id='1', body='Explore this historic landmark.', title='Historic Landmark', main_pic='./images/pic(9).jpg')
    pin7 = Pin(
        user_id='1', body='Encounter wildlife in the wilderness.', title='Wildlife in the Wilderness', main_pic='./images/pic(10).jpg')
    pin8 = Pin(
        user_id='1', body='Savor an exquisite dining experience.', title='Exquisite Dining Experience', main_pic='./images/pic(11).jpg')
    pin9 = Pin(
        user_id='1', body='Cozy up by the fireplace in this retreat.', title='Cozy Fireplace Retreat', main_pic='./images/pic(12).jpg')
    pin10 = Pin(
        user_id='1', body='Embark on a thrilling sailing adventure.', title='Sailing Adventure', main_pic='./images/pic(13).jpg')
    pin11 = Pin(
        user_id='1', body='Experience a mountain cabin getaway.', title='Mountain Cabin Getaway', main_pic='./images/pic(14).jpg')
    pin12 = Pin(
        user_id='1', body='Discover a hidden waterfall oasis.', title='Hidden Waterfall Oasis', main_pic='./images/pic(15).jpg')
    pin13 = Pin(
        user_id='1', body='Admire urban street art.', title='Urban Street Art', main_pic='./images/pic(16).jpg')
    pin14 = Pin(
        user_id='1', body='Enjoy the beauty of Japanese cherry blossoms.', title='Japanese Cherry Blossoms', main_pic='./images/pic(17).jpg')
    pin15 = Pin(
        user_id='1', body='Embark on a hike in the majestic Alps.', title='Hiking in the Alps', main_pic='./images/pic(18).jpg')
    pin16 = Pin(
        user_id='1', body='Witness a breathtaking sunrise over the desert.', title='Sunrise Over the Desert', main_pic='./images/pic(19).jpg')
    pin17 = Pin(
        user_id='1', body='Stay in a luxurious Italian countryside villa.', title='Italian Countryside Villa', main_pic='./images/pic(20).jpg')
    pin18 = Pin(
        user_id='1', body='Experience a luxurious cruise ship voyage.', title='Luxury Cruise Ship', main_pic='./images/pic(21).jpg')
    pin19 = Pin(
        user_id='1', body='Embark on an exciting African safari adventure.', title='African Safari Adventure', main_pic='./images/pic(22).jpg')
    pin20 = Pin(
        user_id='1', body='Explore the history of a European castle.', title='Historic European Castle', main_pic='./images/pic(23).jpg')
    pin21 = Pin(
        user_id='2', body='Relax on a Greek island paradise.', title='Greek Island Paradise', main_pic='./images/pic(24).jpg')
    pin22 = Pin(
        user_id='2', body='Experience a snowy mountain retreat.', title='Snowy Mountain Retreat', main_pic='./images/pic(25).jpg')
    pin23 = Pin(
        user_id='2', body='Unwind at a picturesque lakeside cabin.', title='Picturesque Lakeside Cabin', main_pic='./images/pic(26).jpg')
    pin24 = Pin(
        user_id='2', body='Marvel at the breathtaking views of a canyon.', title='Breathtaking Canyon View', main_pic='./images/pic(27).jpg')
    pin25 = Pin(
        user_id='2', body='Dine in style at a rooftop garden oasis.', title='Rooftop Garden Oasis', main_pic='./images/pic(28).jpg')
    pin26 = Pin(
        user_id='2', body='Find enchantment in a magical forest glade.', title='Magical Forest Glade', main_pic='./images/pic(29).jpg')
    pin27 = Pin(
        user_id='2', body='Discover the history of a historic lighthouse.', title='Historic Lighthouse', main_pic='./images/pic(30).jpg')
    pin28 = Pin(
        user_id='2', body='Savor gourmet cuisine at a stylish cafe.', title='Gourmet Cuisine Delight', main_pic='./images/pic(31).jpg')
    pin29 = Pin(
        user_id='2', body='Escape to an island paradise.', title='Island Paradise Getaway', main_pic='./images/pic(32).jpg')
    pin30 = Pin(
        user_id='2', body='Experience the charm of a European street cafe.', title='European Street Cafe', main_pic='./images/pic(33).jpg')
    pin31 = Pin(
        user_id='2', body='Embark on an adventure in a tropical rainforest.', title='Tropical Rainforest Exploration', main_pic='./images/pic(34).jpg')
    pin32 = Pin(
        user_id='2', body='Enjoy wine tasting in a picturesque vineyard.', title='Vineyard Wine Tasting', main_pic='./images/pic(35).jpg')
    pin33 = Pin(
        user_id='2', body='Watch colorful hot air balloons fill the sky.', title='Colorful Hot Air Balloons', main_pic='./images/pic(36).jpg')
    pin34 = Pin(
        user_id='2', body='Find serenity in a Japanese Zen garden.', title='Japanese Zen Garden', main_pic='./images/pic(37).jpg')
    pin35 = Pin(
        user_id='2', body='Witness a sunrise from a mountain peak.', title='Mountain Peak Sunrise', main_pic='./images/pic(38).jpg')
    pin36 = Pin(
        user_id='2', body='Relax at a luxurious beach resort.', title='Luxury Beach Resort', main_pic='./images/pic(39).jpg')
    pin37 = Pin(
        user_id='2', body='Admire the beauty of a historic cathedral.', title='Historic Cathedral', main_pic='./images/pic(40).jpg')
    pin38 = Pin(
        user_id='2', body='Explore the wonders of an underwater coral reef.', title='Underwater Coral Reef', main_pic='./images/pic(41).jpg')
    pin39 = Pin(
        user_id='2', body='Visit a charming countryside vineyard.', title='Countryside Vineyard', main_pic='./images/pic(42).jpg')
    pin40 = Pin(
        user_id='2', body='Witness a stunning sunset at the Grand Canyon.', title='Sunset at the Grand Canyon', main_pic='./images/pic(43).jpg')
    pin41 = Pin(
        user_id='3', body='Embark on a snowy wilderness adventure.', title='Snowy Wilderness Adventure', main_pic='./images/pic(44).jpg')
    pin42 = Pin(
        user_id='3', body='Explore ancient Roman ruins.', title='Historic Roman Ruins', main_pic='./images/pic(45).jpg')
    pin43 = Pin(
        user_id='3', body='Relax in a tropical island hammock.', title='Tropical Island Hammock', main_pic='./images/pic(46).jpg')
    pin44 = Pin(
        user_id='3', body='Admire the lavender fields in Provence.', title='Lavender Fields in Provence', main_pic='./images/pic(47).jpg')
    pin45 = Pin(
        user_id='3', body='Marvel at the majesty of a waterfall.', title='Majestic Waterfall', main_pic='./images/pic(48).jpg')
    pin46 = Pin(
        user_id='3', body='Dine at an elegant Parisian cafe.', title='Elegant Parisian Cafe', main_pic='./images/pic(49).jpg')
    pin47 = Pin(
        user_id='3', body='Witness the spectacle of the Aurora Borealis.', title='Aurora Borealis Spectacle', main_pic='./images/pic(50).jpg')
    pin48 = Pin(
        user_id='3', body='Enjoy skiing in the Swiss Alps.', title='Skiing in the Swiss Alps', main_pic='./images/pic(51).jpg')
    pin49 = Pin(
        user_id='3', body='Relax on a secluded beach cove.', title='Secluded Beach Cove', main_pic='./images/pic(52).jpg')
    pin50 = Pin(
        user_id='3', body='Experience the charm of a Tuscan villa.', title='Charming Tuscan Villa', main_pic='./images/pic(53).jpg')
    board1 = Board(
        user_id='1', title='Desert Adventure Dunes', coverpic='./images/pic(54).jpg')
    board2 = Board(
        user_id='1', title='Rural Farmhouse Escape', coverpic='./images/pic(55).jpg')
    board3 = Board(
        user_id='1', title='Whitewater Rafting Excursion', coverpic='./images/pic(56).jpg')
    board4 = Board(
        user_id='2', title='Ancient Mayan Ruins', coverpic='./images/pic(57).jpg')
    board5 = Board(
        user_id='2', title='Hidden Cave Exploration', coverpic='./images/pic(58).jpg')
    board6 = Board(
        user_id='3', title='Illuminated Tokyo Streets', coverpic='./images/pic(59).jpg')
    board7 = Board(
        user_id='3', title='Enchanting Forest Waterfall', coverpic='./images/pic(60).jpg')
    board8 = Board(
        user_id='3', title='Luxury Cruise in the Caribbean', coverpic='./images/pic(61).jpg')

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add_all([
    pin1, pin2, pin3, pin4, pin5, pin6, pin7, pin8, pin9, pin10,
    pin11, pin12, pin13, pin14, pin15, pin16, pin17, pin18, pin19, pin20,
    pin21, pin22, pin23, pin24, pin25, pin26, pin27, pin28, pin29, pin30,
    pin31, pin32, pin33, pin34, pin35, pin36, pin37, pin38, pin39, pin40,
    pin41, pin42, pin43, pin44, pin45, pin46, pin47, pin48, pin49, pin50])
    db.session.add_all([
    board1, board2, board3, board4, board5, board6, board7, board8])
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
        db.session.execute(f"TRUNCATE table {SCHEMA}.pins RESTART IDENTITY CASCADE;")
        db.session.execute(f"TRUNCATE table {SCHEMA}.boards RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM users"))
        db.session.execute(text("DELETE FROM pins"))
        db.session.execute(text("DELETE FROM boards"))
        
    db.session.commit()