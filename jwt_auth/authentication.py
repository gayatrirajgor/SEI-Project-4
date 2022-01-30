from rest_framework.authentication import BasicAuthentication
from rest_framework.exceptions import PermissionDenied
from django.contrib.auth import get_user_model
from django.conf import settings # for the secret key
import jwt
User = get_user_model()

class JWTAuthentication(BasicAuthentication):
    def authenticate(self, request):
        #check for authorization header, if there isn't one none is returned.
        header = request.headers.get('Authorization')
        if not header:
            return None
        if header.startswith('Basic'): # Add this line in
            return None
        #If there is a header, but it does not start with Bearer a PermissionDenied error is thrown
        if not header.startswith('Bearer'):
            raise PermissionDenied({'message': 'Invalid authorization header'})
        token = header.replace('Bearer ', '')
        try:
            payload = jwt.decode(token, settings.SECRET_KEY, algorithms=['HS256'])
            user = User.objects.get(pk=payload.get('sub'))
        except jwt.exceptions.InvalidTokenError:
            raise PermissionDenied({'message': 'Invalid Token'})
        except User.DoesNotExist:
            raise PermissionDenied({'message': 'User not found'})
        return (user, token)