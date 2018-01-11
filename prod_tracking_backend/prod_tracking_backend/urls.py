
from django.contrib import admin
from django.urls import path
from django.conf.urls.static import static
from django.conf import settings
from rest_framework.urlpatterns import format_suffix_patterns
from api import views
urlpatterns = [
    path('admin/', admin.site.urls),
    path('load/', views.load_from_file),
    path('download/', views.download_docx),
    path('products/', views.ProductList.as_view()),
    path('products/<str:desc>/<str:datetime>', views.ProductDetail.as_view()),
    path('product/<int:id>', views.ProductDetail.as_view()),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
