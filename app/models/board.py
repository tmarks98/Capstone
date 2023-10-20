from .db import db, environment, SCHEMA, add_prefix_for_prod
from .board_pins import board_pins

class Board(db.Model):
  __tablename__ = "boards"

  if environment == "production":
    __table_args__ = {'schema': SCHEMA}

  id = db.Column(db.Integer, primary_key=True)
  user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')))
  title = db.Column(db.Text())
  coverpic = db.Column(db.String(255), nullable=False)
  created_at = db.Column(db.TIMESTAMP())

  # Relationships
  user = db.relationship("User", back_populates="boards")
  boards_pins = db.relationship("Pin", secondary=board_pins, back_populates="pins_boards")

  def to_dict(self):
    return {
      'id': self.id,
      'userId': self.user_id,
      'title': self.title,
      'coverpic': self.coverpic,
      'createdAt': self.created_at,
      'board_pins': [pin.to_dict() for pin in self.boards_pins]
    }