from djongo.models import *
from djongo.models import fields


# Blog
class BlogEntry(Model):
    id = fields.AutoField(auto_created=True, primary_key=True)
    title = CharField(max_length=100, verbose_name="Título")
    image = ImageField(upload_to="blog_img", verbose_name="Portada")
    data = TextField(verbose_name="")

    class Meta:
        verbose_name = "Entrada de blog"
        verbose_name_plural = "Entradas del blog"

    def __str__(self):
        return self.title
