from .db import db

class Category(db.Model):
    __tablename__ = 'categories'

    # Cols
    id = db.Column(db.Integer, primary_key=True)
    category = db.Column(db.String, nullable=False)

    # Relationships
    projects = db.relationship('Project', back_populates='categories')

    def to_dict(self):
        return {
            'id': self.id,
            'category': self.category,
            'projects': [projects.to_dict() for projects in self.projects]
        }
