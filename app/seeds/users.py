from app.models import db, User, Pin, Board, environment, SCHEMA
from sqlalchemy.sql import text


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username="Demo",
        profile_pic="https://cdn.discordapp.com/attachments/1141883194111688739/1164581473374965770/6bc7f8e4bf5d1075213b4321566c36b4.png?ex=6543bc04&is=65314704&hm=883b8d98cebf7d8e135a737c657cd382e86bb21952c4e5fd391c8f204858377b&",
        bio="This is my bio. ",
        email="demo@aa.io",
        password="password",
    )
    user1 = User(
        username="alice",
        profile_pic="https://cdn.discordapp.com/attachments/1141883194111688739/1150542380244668456/pic11.jpg",
        bio="Adventures with Alice.",
        email="alice@aa.io",
        password="password",
    )
    user2 = User(
        username="brian",
        profile_pic="https://cdn.discordapp.com/attachments/1141883194111688739/1150542381842694205/pic17.jpg",
        bio="Brian the brave.",
        email="brian@aa.io",
        password="password",
    )
    user3 = User(
        username="candice",
        profile_pic="https://cdn.discordapp.com/attachments/1141883194111688739/1150542382064996412/pic18.jpg",
        bio="Candice the coder.",
        email="candice@aa.io",
        password="password",
    )
    user4 = User(
        username="david",
        profile_pic="https://cdn.discordapp.com/attachments/1141883194111688739/1164581488621273138/b3cbcead43c70ecf03b9d6ba349aa13a.png?ex=6543bc07&is=65314707&hm=dc57edcb482181b98e37b4153e6161273855b7fdf3f3b07bc23357e3314ad8f5&",
        bio="David from downtown.",
        email="david@aa.io",
        password="password",
    )
    user5 = User(
        username="elaine",
        profile_pic="https://cdn.discordapp.com/attachments/1141883194111688739/1164581506895855667/4bf85ef65539dcaa3ab8b80e02290ada.png?ex=6543bc0c&is=6531470c&hm=f4e712567d04274326f03c0415ab65170cd7b1fb22f6734fa418c39f0fbc1d9b&",
        bio="Elaine the elegant.",
        email="elaine@aa.io",
        password="password",
    )
    user6 = User(
        username="frank",
        profile_pic="https://cdn.discordapp.com/attachments/1141883194111688739/1164581527124971610/f01eb1a545c882cd90be738d9edc3af6.png?ex=6543bc10&is=65314710&hm=65a6cff9c93b3ccb17f6c9a851fb30b6a2af74295e7a40b65865550c64567f97&",
        bio="Frankly speaking.",
        email="frank@aa.io",
        password="password",
    )
    user7 = User(
        username="grace",
        profile_pic="https://cdn.discordapp.com/attachments/1141883194111688739/1164581544908832769/69a82a563703fc99d79af166cadebdf6.png?ex=6543bc15&is=65314715&hm=84c4166b68cc104dfa10001b7615e4b908022a72d3c4521243b7ec3d2fd8a789&",
        bio="Graceful moves.",
        email="grace@aa.io",
        password="password",
    )
    user8 = User(
        username="harry",
        profile_pic="https://cdn.discordapp.com/attachments/1141883194111688739/1164581575934103644/d830ab89e8c037b96ba5255365b90eec.png?ex=6543bc1c&is=6531471c&hm=efe43c5e5ff567679aa79780c5c82596aaeea32c826d20af295d6ab494e0e368&",
        bio="Harry the historian.",
        email="harry@aa.io",
        password="password",
    )
    user9 = User(
        username="isla",
        profile_pic="https://cdn.discordapp.com/attachments/1141883194111688739/1164581596020605000/af48ab5185e32ce3fdd643e7dd70a6b5.png?ex=6543bc21&is=65314721&hm=7f8c81307cd31026ccefdd816b2bf07253e5796841588627e57f02e36a143cd1&",
        bio="Isla from the island.",
        email="isla@aa.io",
        password="password",
    )
    user10 = User(
        username="jack",
        profile_pic="https://cdn.discordapp.com/attachments/1141883194111688739/1164582723776684133/457ce02406a0bdbfeb0591963890ad20.png?ex=6543bd2e&is=6531482e&hm=6d4322d9b17dc4340ecb6393bf5f3e4281f8f1b39bdf5ecb603751483c63c83b&",
        bio="Jack of all trades.",
        email="jack@aa.io",
        password="password",
    )
    pin1 = Pin(
        user_id="1",
        body="A breathtaking view of the scenic mountains.",
        title="Scenic Mountain View",
        main_pic="https://cdn.discordapp.com/attachments/1141883194111688739/1150542258391748748/pic3.jpg",
    )
    pin2 = Pin(
        user_id="1",
        body="A beautiful sunset over the ocean horizon.",
        title="Sunset Over the Ocean",
        main_pic="https://cdn.discordapp.com/attachments/1141883194111688739/1150542258899263578/pic4.jpg",
    )
    pin3 = Pin(
        user_id="1",
        body="A mesmerizing city skyline at night.",
        title="City Skyline at Night",
        main_pic="https://cdn.discordapp.com/attachments/1141883194111688739/1150541886063398992/df1a6fe6cce91e36243256ae8a3e79b7.jpg",
    )
    pin4 = Pin(
        user_id="1",
        body="Relax on this tropical beach paradise.",
        title="Tropical Beach Paradise",
        main_pic="https://cdn.discordapp.com/attachments/1141883194111688739/1150542257859068004/pic1.jpg",
    )
    pin5 = Pin(
        user_id="1",
        body="Enjoy the vibrant colors of the autumn forest.",
        title="Autumn Forest Colors",
        main_pic="https://cdn.discordapp.com/attachments/1141883194111688739/1150542258119123064/pic2.jpg",
    )
    pin6 = Pin(
        user_id="1",
        body="Explore this historic landmark.",
        title="Historic Landmark",
        main_pic="https://cdn.discordapp.com/attachments/1141883194111688739/1150542259230609631/pic5.jpg",
    )
    pin7 = Pin(
        user_id="1",
        body="Encounter wildlife in the wilderness.",
        title="Wildlife in the Wilderness",
        main_pic="https://cdn.discordapp.com/attachments/1141883194111688739/1150542259532595342/pic6.jpg",
    )
    pin8 = Pin(
        user_id="1",
        body="Savor an exquisite dining experience.",
        title="Exquisite Dining Experience",
        main_pic="https://cdn.discordapp.com/attachments/1141883194111688739/1150542259847176303/pic7.jpg",
    )
    pin9 = Pin(
        user_id="1",
        body="Cozy up by the fireplace in this retreat.",
        title="Cozy Fireplace Retreat",
        main_pic="https://cdn.discordapp.com/attachments/1141883194111688739/1150542260077858846/pic8.jpg",
    )
    pin10 = Pin(
        user_id="1",
        body="Embark on a thrilling sailing adventure.",
        title="Sailing Adventure",
        main_pic="https://cdn.discordapp.com/attachments/1141883194111688739/1150542260308541450/pic9.jpg",
    )
    pin11 = Pin(
        user_id="1",
        body="Experience a mountain cabin getaway.",
        title="Mountain Cabin Getaway",
        main_pic="https://cdn.discordapp.com/attachments/1141883194111688739/1150542260526653450/pic10.jpg",
    )
    pin12 = Pin(
        user_id="1",
        body="Discover a hidden waterfall oasis.",
        title="Hidden Waterfall Oasis",
        main_pic="https://cdn.discordapp.com/attachments/1141883194111688739/1150542380496339125/pic12.jpg",
    )
    pin13 = Pin(
        user_id="1",
        body="Admire urban street art.",
        title="Urban Street Art",
        main_pic="https://cdn.discordapp.com/attachments/1141883194111688739/1150542380768952401/pic13.jpg",
    )
    pin14 = Pin(
        user_id="1",
        body="Enjoy the beauty of Japanese cherry blossoms.",
        title="Japanese Cherry Blossoms",
        main_pic="https://cdn.discordapp.com/attachments/1141883194111688739/1150542381016432691/pic14.jpg",
    )
    pin15 = Pin(
        user_id="1",
        body="Embark on a hike in the majestic Alps.",
        title="Hiking in the Alps",
        main_pic="https://cdn.discordapp.com/attachments/1141883194111688739/1150542381280657488/pic15.jpg",
    )
    pin16 = Pin(
        user_id="1",
        body="Witness a breathtaking sunrise over the desert.",
        title="Sunrise Over the Desert",
        main_pic="https://cdn.discordapp.com/attachments/1141883194111688739/1150542381565874287/pic16.jpg",
    )
    pin17 = Pin(
        user_id="1",
        body="Stay in a luxurious Italian countryside villa.",
        title="Italian Countryside Villa",
        main_pic="https://cdn.discordapp.com/attachments/1141883194111688739/1150542382283112528/pic19.jpg",
    )
    pin18 = Pin(
        user_id="1",
        body="Experience a luxurious cruise ship voyage.",
        title="Luxury Cruise Ship",
        main_pic="https://cdn.discordapp.com/attachments/1141883194111688739/1150542382509588531/pic20.jpg",
    )
    pin19 = Pin(
        user_id="1",
        body="Embark on an exciting African safari adventure.",
        title="African Safari Adventure",
        main_pic="https://cdn.discordapp.com/attachments/1141883194111688739/1150542428542087168/pic21.jpg",
    )
    pin20 = Pin(
        user_id="1",
        body="Explore the history of a European castle.",
        title="Historic European Castle",
        main_pic="https://cdn.discordapp.com/attachments/1141883194111688739/1150542428852474038/pic22.jpg",
    )
    pin21 = Pin(
        user_id="2",
        body="Relax on a Greek island paradise.",
        title="Greek Island Paradise",
        main_pic="https://cdn.discordapp.com/attachments/1141883194111688739/1150542429125087392/pic23.jpg",
    )
    pin22 = Pin(
        user_id="2",
        body="Experience a snowy mountain retreat.",
        title="Snowy Mountain Retreat",
        main_pic="https://cdn.discordapp.com/attachments/1141883194111688739/1150542429339005090/pic24.jpg",
    )
    pin23 = Pin(
        user_id="2",
        body="Unwind at a picturesque lakeside cabin.",
        title="Picturesque Lakeside Cabin",
        main_pic="https://cdn.discordapp.com/attachments/1141883194111688739/1150542430282731560/pic27.jpg",
    )
    pin24 = Pin(
        user_id="2",
        body="Marvel at the breathtaking views of a canyon.",
        title="Breathtaking Canyon View",
        main_pic="https://cdn.discordapp.com/attachments/1141883194111688739/1150542429922005153/pic26.jpg",
    )
    pin25 = Pin(
        user_id="2",
        body="Dine in style at a rooftop garden oasis.",
        title="Rooftop Garden Oasis",
        main_pic="https://cdn.discordapp.com/attachments/1141883194111688739/1150542429603254352/pic25.jpg",
    )
    pin26 = Pin(
        user_id="2",
        body="Find enchantment in a magical forest glade.",
        title="Magical Forest Glade",
        main_pic="https://cdn.discordapp.com/attachments/1141883194111688739/1150542430525984848/pic28.jpg",
    )
    pin27 = Pin(
        user_id="2",
        body="Discover the history of a historic lighthouse.",
        title="Historic Lighthouse",
        main_pic="https://cdn.discordapp.com/attachments/1141883194111688739/1150542430819594311/pic29.jpg",
    )
    pin28 = Pin(
        user_id="2",
        body="Savor gourmet cuisine at a stylish cafe.",
        title="Gourmet Cuisine Delight",
        main_pic="https://cdn.discordapp.com/attachments/1141883194111688739/1150542431075455088/pic30.jpg",
    )
    pin29 = Pin(
        user_id="2",
        body="Escape to an island paradise.",
        title="Island Paradise Getaway",
        main_pic="https://cdn.discordapp.com/attachments/1141883194111688739/1150542475342139522/pic31.jpg",
    )
    pin30 = Pin(
        user_id="2",
        body="Experience the charm of a European street cafe.",
        title="European Street Cafe",
        main_pic="https://cdn.discordapp.com/attachments/1141883194111688739/1150542475727994942/pic32.jpg",
    )
    pin31 = Pin(
        user_id="2",
        body="Embark on an adventure in a tropical rainforest.",
        title="Tropical Rainforest Exploration",
        main_pic="https://cdn.discordapp.com/attachments/1141883194111688739/1150542476004835358/pic33.jpg",
    )
    pin32 = Pin(
        user_id="2",
        body="Enjoy wine tasting in a picturesque vineyard.",
        title="Vineyard Wine Tasting",
        main_pic="https://cdn.discordapp.com/attachments/1141883194111688739/1150542476327780493/pic34.jpg",
    )
    pin33 = Pin(
        user_id="2",
        body="Watch colorful hot air balloons fill the sky.",
        title="Colorful Hot Air Balloons",
        main_pic="https://cdn.discordapp.com/attachments/1141883194111688739/1150542476709478590/pic35.jpg",
    )
    pin34 = Pin(
        user_id="2",
        body="Find serenity in a Japanese Zen garden.",
        title="Japanese Zen Garden",
        main_pic="https://cdn.discordapp.com/attachments/1141883194111688739/1150542476994695248/pic36.jpg",
    )
    pin35 = Pin(
        user_id="2",
        body="Witness a sunrise from a mountain peak.",
        title="Mountain Peak Sunrise",
        main_pic="https://cdn.discordapp.com/attachments/1141883194111688739/1150542477246332928/pic37.jpg",
    )
    pin36 = Pin(
        user_id="2",
        body="Relax at a luxurious beach resort.",
        title="Luxury Beach Resort",
        main_pic="https://cdn.discordapp.com/attachments/1141883194111688739/1150542477518979123/pic38.jpg",
    )
    pin37 = Pin(
        user_id="2",
        body="Admire the beauty of a historic cathedral.",
        title="Historic Cathedral",
        main_pic="https://cdn.discordapp.com/attachments/1141883194111688739/1150542477808369724/pic39.jpg",
    )
    pin38 = Pin(
        user_id="2",
        body="Explore the wonders of an underwater coral reef.",
        title="Underwater Coral Reef",
        main_pic="https://cdn.discordapp.com/attachments/1141883194111688739/1150542478089404426/pic40.jpg",
    )
    pin39 = Pin(
        user_id="2",
        body="Visit a charming countryside vineyard.",
        title="Countryside Vineyard",
        main_pic="https://cdn.discordapp.com/attachments/1141883194111688739/1150542519017422979/pic41.jpg",
    )
    pin40 = Pin(
        user_id="2",
        body="Witness a stunning sunset at the Grand Canyon.",
        title="Sunset at the Grand Canyon",
        main_pic="https://cdn.discordapp.com/attachments/1141883194111688739/1150542519260696688/pic42.jpg",
    )
    pin41 = Pin(
        user_id="3",
        body="Embark on a snowy wilderness adventure.",
        title="Snowy Wilderness Adventure",
        main_pic="https://cdn.discordapp.com/attachments/1141883194111688739/1150542519520723024/pic43.jpg",
    )
    pin42 = Pin(
        user_id="3",
        body="Explore ancient Roman ruins.",
        title="Historic Roman Ruins",
        main_pic="https://cdn.discordapp.com/attachments/1141883194111688739/1150542519935979541/pic44.jpg",
    )
    pin43 = Pin(
        user_id="3",
        body="Relax in a tropical island hammock.",
        title="Tropical Island Hammock",
        main_pic="https://cdn.discordapp.com/attachments/1141883194111688739/1150542520166645901/pic45.jpg",
    )
    pin44 = Pin(
        user_id="3",
        body="Admire the lavender fields in Provence.",
        title="Lavender Fields in Provence",
        main_pic="https://cdn.discordapp.com/attachments/1141883194111688739/1150542520397349016/pic46.jpg",
    )
    pin45 = Pin(
        user_id="3",
        body="Marvel at the majesty of a waterfall.",
        title="Majestic Waterfall",
        main_pic="https://cdn.discordapp.com/attachments/1141883194111688739/1150542520628039802/pic47.jpg",
    )
    pin46 = Pin(
        user_id="3",
        body="Dine at an elegant Parisian cafe.",
        title="Elegant Parisian Cafe",
        main_pic="https://cdn.discordapp.com/attachments/1141883194111688739/1150542520854511676/pic48.jpg",
    )
    pin47 = Pin(
        user_id="3",
        body="Witness the spectacle of the Aurora Borealis.",
        title="Aurora Borealis Spectacle",
        main_pic="https://cdn.discordapp.com/attachments/1141883194111688739/1150542521085214740/pic49.jpg",
    )
    pin48 = Pin(
        user_id="3",
        body="Enjoy skiing in the Swiss Alps.",
        title="Skiing in the Swiss Alps",
        main_pic="https://cdn.discordapp.com/attachments/1141883194111688739/1150542521299128350/pic50.jpg",
    )
    pin49 = Pin(
        user_id="3",
        body="Relax on a secluded beach cove.",
        title="Secluded Beach Cove",
        main_pic="https://cdn.discordapp.com/attachments/1141883194111688739/1150542587095154688/pic52.jpg",
    )
    pin50 = Pin(
        user_id="3",
        body="Experience the charm of a Tuscan villa.",
        title="Charming Tuscan Villa",
        main_pic="https://cdn.discordapp.com/attachments/1141883194111688739/1150542587334234204/pic53.jpg",
    )
    pin51 = Pin(
        user_id="3",
        body="Aye yo",
        title="whaaaaaaaaaat?",
        main_pic="https://cdn.discordapp.com/attachments/1141883194111688739/1150542587636228217/pic54.jpg",
    )
    board1 = Board(
        user_id="1",
        title="Desert Adventure Dunes",
        coverpic="https://64.media.tumblr.com/6b22f93e211b8f4d967074773960a706/tumblr_mqpifljNP61sxviy0o1_250.gifv",
    )
    board2 = Board(
        user_id="1",
        title="Rural Farmhouse Escape",
        coverpic="https://cdn.discordapp.com/attachments/1141883194111688739/1150542587908849766/pic55.jpg",
    )
    board3 = Board(
        user_id="1",
        title="Whitewater Rafting Excursion",
        coverpic="https://cdn.discordapp.com/attachments/1141883194111688739/1150542588324089988/pic56.jpg",
    )
    board4 = Board(
        user_id="2",
        title="Ancient Mayan Ruins",
        coverpic="https://cdn.discordapp.com/attachments/1141883194111688739/1150542588613500979/pic57.jpg",
    )
    board5 = Board(
        user_id="2",
        title="Hidden Cave Exploration",
        coverpic="https://cdn.discordapp.com/attachments/1141883194111688739/1150542588860956814/pic58.jpg",
    )
    board6 = Board(
        user_id="3",
        title="Illuminated Tokyo Streets",
        coverpic="https://cdn.discordapp.com/attachments/1141883194111688739/1150542589322338375/pic59.jpg",
    )
    board7 = Board(
        user_id="3",
        title="Enchanting Forest Waterfall",
        coverpic="https://cdn.discordapp.com/attachments/1141883194111688739/1150542589590765648/pic60.jpg",
    )
    board8 = Board(
        user_id="3",
        title="Luxury Cruise in the Caribbean",
        coverpic="https://cdn.discordapp.com/attachments/1141883194111688739/1150542589825650728/pic61.jpg",
    )

    board1.boards_pins = [pin1, pin2, pin3, pin4, pin5]
    board2.boards_pins = [pin6, pin7, pin8, pin9, pin10]
    board3.boards_pins = [pin11, pin12, pin13, pin14, pin15]
    board4.boards_pins = [pin16, pin17, pin18, pin19, pin20]
    board5.boards_pins = [pin21, pin22, pin23, pin24, pin25]
    board6.boards_pins = [pin26, pin27, pin28, pin29, pin30]
    board7.boards_pins = [pin31, pin32, pin33, pin34, pin35]
    board8.boards_pins = [pin36, pin37, pin38, pin39, pin40]

    db.session.add(demo)
    db.session.add(user1)
    db.session.add(user2)
    db.session.add(user3)
    db.session.add(user4)
    db.session.add(user5)
    db.session.add(user6)
    db.session.add(user7)
    db.session.add(user8)
    db.session.add(user9)
    db.session.add(user10)
    db.session.add_all(
        [
            pin1,
            pin2,
            pin3,
            pin4,
            pin5,
            pin6,
            pin7,
            pin8,
            pin9,
            pin10,
            pin11,
            pin12,
            pin13,
            pin14,
            pin15,
            pin16,
            pin17,
            pin18,
            pin19,
            pin20,
            pin21,
            pin22,
            pin23,
            pin24,
            pin25,
            pin26,
            pin27,
            pin28,
            pin29,
            pin30,
            pin31,
            pin32,
            pin33,
            pin34,
            pin35,
            pin36,
            pin37,
            pin38,
            pin39,
            pin40,
            pin41,
            pin42,
            pin43,
            pin44,
            pin45,
            pin46,
            pin47,
            pin48,
            pin49,
            pin50,
            pin51,
        ]
    )
    db.session.add_all([board1, board2, board3, board4, board5, board6, board7, board8])
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
