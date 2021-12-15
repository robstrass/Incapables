from .db import db

class Comment(db.Model):
    __tablename__ = 'comments'

    # Cols
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user_id'), nullable=False)
    project_id = db.Column(db.Integer, db.ForeignKey('project_id'))
