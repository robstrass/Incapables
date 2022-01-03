from .db import db

class Comment(db.Model):
    __tablename__ = 'comments'

    # Cols
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    project_id = db.Column(db.Integer, db.ForeignKey('projects.id'), nullable=False)
    content = db.Column(db.Text, nullable=False)
    createdAt = db.Column(db.DateTime(), server_default=db.func.now(), nullable=False)
    updatedAt = db.Column(db.DateTime(), server_default=db.func.now(), nullable=False)

    # Relationships
    users = db.relationship('User', back_populates='comments')
    projects = db.relationship('Project', back_populates='comments')

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'project_id': self.project_id,
            'author': self.users.to_dict(),
            'content': self.content,
            'createdAt': self.createdAt,
            'updatedAt': self.updatedAt
        }
