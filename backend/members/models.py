from django.db import models

class Member(models.Model):
    name = models.CharField(max_length=50)
    bio = models.CharField(max_length=500)
    team = models.CharField(max_length=20)
    image_url = models.CharField(max_length=200)

    def __str__(self):
        return self.name
