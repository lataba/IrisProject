from django.urls import path, include
from rest_framework import routers
from IrisApp import views

# api versioning
router1 = routers.DefaultRouter()
router1.register(r'Business_Data', views.Business_DataView, 'Business_Data')

router2 = routers.DefaultRouter()
router2.register(r'Collaborators', views.CollaboratorsView, 'Collaborators')

router3 = routers.DefaultRouter()
router3.register(r'Services', views.ServicesView, 'Services')

router4 = routers.DefaultRouter()
router4.register(r'Appointment', views.AppointmentView, 'Appointment')

urlpatterns = [
    path('api/', include(router1.urls)),
    path('api/', include(router2.urls)),
    path('api/', include(router3.urls)),
    path('api/', include(router4.urls)),
    path('api/create_appointment/', views.CreateAppointmentView.as_view(), name='create_appointment'),
    path('api/appointments/', views.FilteredAppointmentsView.as_view(), name='filtered_appointments'),
    path('api/service/<int:service_id>/collaborators/', views.CollaboratorsByServiceView.as_view(), name='collaborators_by_service'),
]