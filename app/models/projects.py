from .db import db

class Project(db.Model):
    __tablename__ = 'projects'

    # Cols
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    category_id = db.Column(db.Integer, db.ForeignKey('categories.id'), nullable=False)
    title = db.Column(db.String, nullable=False)
    content = db.Column(db.Text, nullable=False)
    createdAt = db.Column(db.DateTime(), server_default=db.func.now(), nullable=False)
    updatedAt = db.Column(db.DateTime(), server_default=db.func.now(), nullable=False)

    # Relationships
    users = db.relationship('User', back_populates='projects')
    categories = db.relationship('Category', back_populates='projects')
    images = db.relationship('Image', back_populates='projects', cascade='all, delete')
    comments = db.relationship('Comment', back_populates='projects', cascade='all, delete')

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'category_id': self.category_id,
            'title': self.title,
            'content': self.content,
            'images': [image.image for image in self.images],
            'comments': [comment.to_dict() for comment in self.comments],
            'images': [image.to_dict() for image in self.images],
            'createdAt': self.createdAt,
            'updatedAt': self.updatedAt
        }
