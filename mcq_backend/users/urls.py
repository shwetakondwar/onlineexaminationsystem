from django.urls import path
from .views import CustomUserCreate,RequestPasswordResetEmail,PasswordTokenCheckAPI,SetNewPasswordAPIView,UpdateProfileView,ProfileView,TempUserView,TempUserView1,TempUserView2
from .views import Users,Feedback

app_name = 'users'

urlpatterns = [
    path('create/', CustomUserCreate.as_view(), name="create_user"),
    path('sample/', Users.as_view(), name="create_user"),
    path('feedback/',Feedback.as_view(), name="feed_user"),
    path('admindeleteupdaterequest/<int:pk>', TempUserView.as_view(), name="temp_user"),
    path('adminupdaterequests/<str:pk>', TempUserView2.as_view(), name="temp_user"),
    path('updaterequest/', TempUserView1.as_view(), name="update_request_by_student"),
    
    path('adminapproveupdaterequest/<int:pk>', UpdateProfileView.as_view(), name="create_user"),
    path('userdetails/<int:pk>',ProfileView.as_view(), name="create_user"),
    
    path('request-reset-email/', RequestPasswordResetEmail.as_view(),
         name="request-reset-email"),
    path('password-reset/<uidb64>/<token>/',
         PasswordTokenCheckAPI.as_view(), name='password-reset-confirm'),
    path('password-reset-complete/', SetNewPasswordAPIView.as_view(),
         name='password-reset-complete')
]
