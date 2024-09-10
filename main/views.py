from django.shortcuts import render, get_object_or_404
from .models import Project, Tag

# Create your views here.
def home(request):
    #get all different project and tags onto template so they can be accessed
    projects = Project.objects.all()
    tags = Tag.objects.all()
    return render(request, "home.html", {"projects": projects, "tags": tags})

def contact(request):
    return render(request, "contact.html")

def project(request, id):
    #using helper function to find primary id in project model or render error 404 page 
    project = get_object_or_404(Project, pk=id)
    return render(request, "project.html", {"project": project})