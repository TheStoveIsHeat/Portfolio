from django.urls import path 
from . import views 

urlpatterns = [
    #diff paths going to same view 
    path("", views.home, name="home"),
    path("home/", views.home, name="home"),
    path("contact/", views.contact, name="contact"),
    #dynamic variable to get project <int:id>
    path("project/<int:id>/", views.project, name="project"),
]