from django.contrib import admin
from .models import Tag, Project, ProjectImage

# Register your models here. (custom registration)
class ProjectImageInline(admin.TabularInline):
    model = ProjectImage
    extra = 1               #specifies how many images are displayed inline (by default we're asking for 1 img)

class ProjectAdmin(admin.ModelAdmin):
    list_display = (
        "title", 
        "link"
    )
    inlines = [ProjectImageInline]
    search_fields = ("title", "description")    #search title or descr, but also show tags so that when clicked, shows project associated
    list_filter = ("tags", )    #filter different tag objects 

class TagAdmin(admin.ModelAdmin):
    list_display = ("name", )
    search_fields = ("name", )

admin.site.register(Tag, TagAdmin)
admin.site.register(Project, ProjectAdmin)
admin.site.register(ProjectImage)

#TO UPDATE DATABASE (IF UPDATED)
#python3 manage.py makemigrations
#python3 manage.py migrate