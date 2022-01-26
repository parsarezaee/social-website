from django.contrib import admin
from .models import PostUser


@admin.register(PostUser)
class PostAdmin(admin.ModelAdmin):
    list_display = ('user', 'slug', 'created')
    list_filter = ('updated',)
    search_fields = ['slug']
    prepopulated_fields = {'slug':('text',)}
    raw_id_fields = ('user',)