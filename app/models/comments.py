from .db import db

class Comment(db.Model):
    __tablename__ = 'comments'

    # Cols
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    project_id = db.Column(db.Integer, db.ForeignKey('project.id'), nullable=False)
    content = db.Column(db.Text, nullable=False)
    createdAt = db.Column(db.DateTime(), nullable=False)
    updatedAt = db.Column(db.DateTime(), nullable=False)

    # Relationships
    users = db.relationship('User', back_populates='users')
    projects = db.relationship('Project', back_populates='projects')

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'project_id': self.project_id,
            'content': self.content,
            'createdAt': self.createdAt,
            'updatedAt': self.updatedAt
        }
