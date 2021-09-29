from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from django.urls.conf import include
from django.conf.urls.static import static

PATH = '/assets/'
ROOT = 'build/assets'

urlpatterns = [
    path('admin/', admin.site.urls),
    path(r'auth/', include('djoser.urls')),
    path(r'auth/', include('djoser.urls.jwt')),
] + static(PATH, document_root=ROOT)


urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name='index.html'))]
 

