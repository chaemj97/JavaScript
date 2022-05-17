from django.urls import path
from . import views
urlpatterns = [
    #'api/v1/todos/' GET : 할 일 목록 반환
    path('', views.todo_list_create),
]
