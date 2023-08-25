from django.db import models
class service1(models.Model):
    service_icon=models.CharField(max_length=40)
    service_heading=models.CharField(max_length=40)
class blog1(models.Model):
    blog_icon=models.CharField(max_length=50)
    blog_heading=models.CharField(max_length=40)
    blog_date=models.DateField()

# Create your models here.
