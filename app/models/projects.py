from .db import db

class Project(db.Model):
    __tablename__ = 'projects'

    # Cols
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    category_id = db.Column(db.Integer, db.ForeignKey('category.id'), nullable=False)
    title = db.Column(db.String, nullable=False)
    content = db.Column(db.Text, nullable=False)
    createdAt = db.Column(db.DateTime(), nullable=False)
    updatedAt = db.Column(db.DateTime(), nullable=False)

    # Relationships
    users = db.relationship('User', back_populates='users')
    categories = db.relationship('Category', back_populates='categories')
    images = db.relationship('Image', back_populates='images', cascade='all, delete')
    comments = db.relationship('Comment', back_populates='comments', cascade='all, delete')

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'category_id': self.category_id,
            'title': self.title,
            'content': self.content,
            'createdAt': self.createdAt,
            'updatedAt': self.updatedAt
        }
