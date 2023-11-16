from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from django.shortcuts import get_object_or_404
from .serializer import Business_DataSerializer, CollaboratorsSerializer, ServicesSerializer, AppointmentSerializer
from .models import Business_Data, CollaboratorAccounts, Services, Appointment
from datetime import datetime

class Business_DataView(viewsets.ModelViewSet):
    serializer_class = Business_DataSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        # Filtrar Business_Data por usuario autenticado
        return Business_Data.objects.filter(user=self.request.user)

class CollaboratorsView(viewsets.ModelViewSet):
    serializer_class = CollaboratorsSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        # Filtrar CollaboratorAccounts por usuario autenticado
        return CollaboratorAccounts.objects.filter(user=self.request.user)

class ServicesView(viewsets.ModelViewSet):
    serializer_class = ServicesSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        # Filtrar Services por usuario autenticado
        return Services.objects.filter(user=self.request.user)

"""class ClientsView(viewsets.ModelViewSet):
    serializer_class = ClientsSerializer
    queryset = Clients.objects.all()
"""

"""
class AppointmentView(viewsets.ModelViewSet):
    serializer_class = AppointmentSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        # Filtrar Appointment por usuario autenticado
        return Appointment.objects.filter(user=self.request.user)
"""

class CreateAppointmentView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = AppointmentSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        id_service = request.data.get('id_service', None)
        id_collaborator = request.data.get('id_collaborator', None)
        day = request.data.get('days', None)
        selected_time = request.data.get('startTime', None)

        if id_service is None or id_collaborator is None:
            return Response({'error': 'Se requieren los IDs: servicio y colaborador'}, status=status.HTTP_400_BAD_REQUEST)
        if day is None:
            return Response({'error': 'Se requiere el día'}, status=status.HTTP_400_BAD_REQUEST)
        if selected_time is None:
            return Response({'error': 'Se requiere la hora'}, status=status.HTTP_400_BAD_REQUEST)

        # Validar formato de hora (HH:MM sin segundos ni microsegundos)
        try:
            parsed_time = datetime.strptime(selected_time, '%H:%M').time()
        except ValueError:
            return Response({'error': 'Formato de hora inválido'}, status=status.HTTP_400_BAD_REQUEST)

        # Validar si la hora está en incrementos de 30 minutos
         # Validar si la hora está en incrementos de 30 minutos y entre las 8:00 y las 18:00
        if parsed_time.minute % 30 != 0 or not (8 <= parsed_time.hour < 18):
            return Response({'error': 'La hora debe estar en incrementos de 30 minutos y entre las 8:00 y las 18:00'}, status=status.HTTP_400_BAD_REQUEST)
        
        # Verificar disponibilidad del horario seleccionado
        existing_appointment = Appointment.objects.filter(id_collaborator=id_collaborator, days=day, startTime=selected_time)
        if existing_appointment.exists():
            return Response({'error': 'El horario seleccionado ya está ocupado.'}, status=status.HTTP_400_BAD_REQUEST)

        # Guardar la cita en la base de datos
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    
class FilteredAppointmentsView(APIView):

    def get(self, request, *args, **kwargs):
        collaborator_id = request.query_params.get('collaborator_id')
        day = request.query_params.get('day')

        if collaborator_id is None or day is None:
            return Response({'error': 'Se requiere el ID del colaborador y el día.'}, status=400)

        try:
            appointments = Appointment.objects.filter(id_collaborator=collaborator_id, days=day)
            serializer = AppointmentSerializer(appointments, many=True)
            return Response(serializer.data, status=200)
        except Exception as e:
            return Response({'error': str(e)}, status=500)
        
class CollaboratorsByServiceView(APIView):
    def get(self, request, service_id, *args, **kwargs):
        service = get_object_or_404(Services, id=service_id)
        collaborators = service.id_collaborator.all()
        serializer = CollaboratorsSerializer(collaborators, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

"""
    def create_appointment(self, request):
        serializer = AppointmentSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        id_service = request.data.get('id_service', None)
        id_collaborator = request.data.get('id_collaborator', None)
        day = request.data.get('day', None)
        selected_time = request.data.get('startTime', None)

        if id_service is None or id_collaborator is None:
            return Response({'error': 'Se requieren los IDs: servicio y colaborador'}, status=status.HTTP_400_BAD_REQUEST)
        if day is None or selected_time is None:
            return Response({'error': 'Se requieren el día y la hora'}, status=status.HTTP_400_BAD_REQUEST)

        # Verificar disponibilidad del horario seleccionado
        existing_appointment = Appointment.objects.filter(id_collaborator=id_collaborator, days=day, startTime=selected_time)
        if existing_appointment.exists():
            return Response({'error': 'El horario seleccionado ya está ocupado.'}, status=status.HTTP_400_BAD_REQUEST)

        # Guardar la cita en la base de datos
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def free_hours(self, request):
        id_collaborator = request.query_params.get('id_collaborator', None)
        day = request.query_params.get('day', None)

        if id_collaborator is None or day is None:
            return Response({'error': 'Se requiere el ID del colaborador y el día.'}, status=status.HTTP_400_BAD_REQUEST)

        # Obtener las horas reservadas para el colaborador en el día seleccionado
        reserved_hours = Appointment.objects.filter(id_collaborator=id_collaborator, days=day).values_list('startTime', flat=True)

        # Obtener las horas de trabajo del colaborador desde Business_Data
        business_data = get_object_or_404(Business_Data, id_user=id_collaborator)
        business_hours = set(business_data.time_range.keys())

        # Filtrar las horas disponibles
        available_hours = list(business_hours - set(reserved_hours))
        return Response(available_hours, status=status.HTTP_200_OK)
"""