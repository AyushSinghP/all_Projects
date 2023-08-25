from django.http import HttpRequest
from django.shortcuts import render
from project.models import service1
from project.models import blog1
def home(request):
    ser_data = service1.objects.all()
    blog_data=blog1.objects.all()
    data={
        "s_info":ser_data,
        "blog_info":blog_data
    }
    return render(request,"index.html",data)
def about(request):
    return render(request,"about.html")
def blog(request):
    return render(request,"blog.html")
def contact(request):
    return render(request,"contact.html")
def detail(request):
    return render(request,"detail.html")
def service(request):
    return render(request,"service.html")
def team(request):
    return render(request,"team.html")
def testimonial(request):
    return render(request,"testimonial.html")