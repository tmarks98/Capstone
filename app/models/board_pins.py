from .db import db, environment, SCHEMA, add_prefix_for_prod


boards_pins = db.Table(
  'board_pins',
  db.Model.metadata,
  db.Column("boards", db.Integer, db.ForeignKey(add_prefix_for_prod('boards.id')), primary_key=True),
  db.Column("pins", db.Integer, db.ForeignKey(add_prefix_for_prod('pins.id')), primary_key=True)
)

if environment == "production":
    boards_pins.schema = SCHEMA