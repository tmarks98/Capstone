from .db import db, environment, SCHEMA, add_prefix_for_prod
from .join import boards_pins

class Pin(db.Model):
  __tablename__ = "pins"

  if environment == "production":
    __table_args__ = {'schema': SCHEMA}

  id = db.Column(db.Integer, primary_key=True)
  user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')))
  body = db.Column(db.Text())
  title = db.Column(db.String(40))
  main_pic = db.Column(db.String(255), nullable=False)
  created_at = db.Column(db.TIMESTAMP())


  # Relationships
  user = db.relationship("User", back_populates="pins")
  boards = db.relationship("Board", secondary=boards_pins, back_populates="pins")

  def to_dict(self):
    return {
      'id': self.id,
      'userId': self.user_id,
      'body': self.body,
      'title': self.title,
      'mainPic': self.main_pic,
      'createdAt': self.created_at
    }