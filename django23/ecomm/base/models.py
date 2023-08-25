from django.db import models
import uuid



class BaseModel(models.Model):
    uid = models.UUIDField(primary_key=True , editable=False , default=uuid.uuid4)
    create_at = models.DateTimeField(atuo_now= True)
    update_at = models.DateTimeField(atuo_now_add= True)

    class Mate:
        abstract = True