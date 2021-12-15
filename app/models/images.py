from .db import db

class Image(db.Model):
    __tablename__ = 'images'

    # Cols
    id = db.Column(db.Integer, primary_key=True)
    project_id = db.Column(db.Integer, db.ForeignKey('project.id'), nullable=False)
    image = db.Column(db.String, nullable=False)
    content = db.Column(db.Text)

    # Relationship
    projects = db.relationship('Project', back_populates='projects')

    def to_dict(self):
        return {
            'id': self.id,
            'project_id': self.project_id,
            'image': self.image,
            'content': self.content
        }
