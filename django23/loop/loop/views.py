from django.http import HttpResponse
from django.shortcuts import render

def home(request):
    final=0
    n1=0
    n2=0
    try:

            n1=int(request.POST["num1"])
            n2=int(request.POST["num2"])
            final=n1+n2
    except:
        pass
    data={
        'name': ['Ayush','ajay','vijay','blacky'],
        'student_detail':[
            {'stdname':'Jhon','mob':12345},
            {'stdname':'Neha','mob':238623},
            {'stdname':'Ayush','mob':9977763947}
        ],
        'n1':n1,
        'n2':n2,
        'answer':final
    }
    return render(request,"index.html",data)