from django.db import models
from django.conf import settings
# Create your models here.
class Todo(models.Model):
    # 사용자가 할 일을 여러 개 등록가능
    # user - todo : 1:N
    user = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='todos', on_delete=models.CASCADE)
    title = models.CharField(max_length=50)
    completed = models.BooleanField(default=False)


    def __str__(self):
        return self.title