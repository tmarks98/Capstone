from app.models import db, Comment, environment, SCHEMA
from sqlalchemy.sql import text
from faker import Faker
from random import randint, choice
from datetime import datetime

faker = Faker()

def fake_comment(user_num, pin_num):
    comments = []
    
    for pin in range(1, pin_num + 1):  # Iterate over each pin
        for _ in range(3):  # Generate 3 comments for each pin
            user_id = randint(1, user_num)
            comment = faker.text()
            year = randint(2021, 2022)
            month = randint(1, 12)
            day = randint(1, 28)
            hour = randint(0, 23)
            minute = randint(0, 59)
            second = randint(0, 59)
            microsecond = randint(0, 999999)
            created_at = datetime(year, month, day, hour, minute, second, microsecond)
            comments.append(Comment(
                user_id = user_id,
                pin_id = pin,  # This ensures each pin gets comments
                comment = comment,
                created_at = created_at,
            ))
    return comments

def seed_comments():
  comments = fake_comment(10, 51)
  _ = [db.session.add(comment) for comment in comments]
  db.session.commit()

def undo_comments():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.comments RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM comments"))

    db.session.commit()
