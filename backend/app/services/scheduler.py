from app.services.publisher import publish_due_posts


def run_scheduler():
    publish_due_posts()
