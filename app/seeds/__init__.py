from flask.cli import AppGroup
from .users import seed_users, undo_users
from .categories import seed_categories, undo_categories
from .projects import seed_projects, undo_projects
from .comments import seed_comments, undo_comments
from .images import seed_images, undo_images

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_categories()
    seed_projects()
    seed_comments()
    seed_images()



# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_categories()
    undo_projects()
    undo_comments()
    undo_images()
