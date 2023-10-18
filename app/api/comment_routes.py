from flask import Blueprint, request
from app.models import Pin, Comment
from app import db
from app.forms import comment_form

comments_routes = Blueprint('comments', __name__)

@comments_routes.route("")
def index():
  comments = Comment.query.all()
  return {'comments' : [comment.to_dict() for comment in comments]}

@comments_routes.route("/<int:id>", methods=["PUT"])
def update_comments(id):
  form = comment_form()

  form['csrf_token'].data = request.cookies['csrf_token']

  comment = Comment.query.get(id)

  if form.validate_on_submit():
    comment.comment = form.data["comment"]
    pin = Pin.query.get(comment.pin_id)
    db.session.commit()
    return {"pin": pin.pin_to_dict_comments()}
  else:
    return {"errors": form.errors}

@comments_routes.route("/<int:id>", methods=["DELETE"])
def delete_comment(id):
  comment = Comment.query.get(id)
  pin = Pin.query.get(comment.pin_id)
  db.session.delete(comment)
  db.session.commit()
  return {"pin": pin.pin_to_dict_comments()}