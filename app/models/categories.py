from .db import db

class Category(db.Model):
    __tablename__ = 'categories'

    # Cols
    id = db.Column(db.Integer, primary_key=True)
    category = db.Column(db.String, nullable=False)

    # Relationships
    projects = db.relationship('Project', back_populates='projects')

    def to_dict(self):
        return {
            'id': self.id,
            'category': self.category
        }
