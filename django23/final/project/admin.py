from django.contrib import admin
from project.models import service1
from project.models import blog1
class admin_data(admin.ModelAdmin):
    list=('service_icon','service_heading')
admin.site.register(service1, admin_data)

class admin_data(admin.ModelAdmin):
    list=('blog_icon','blog_heading','blog_date')
admin.site.register(blog1, admin_data)
    
# Register your models here.
