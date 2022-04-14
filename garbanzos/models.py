from mongoengine import Document, fields
from mongoengine.fields import StringField, FloatField, ListField, DateField


class Libros(Document):
    _id = fields.ObjectId()
    autor = StringField()
    titulo = StringField()
    codigo = FloatField()
    editorial = ListField()


class Users(Document):
    _id = fields.ObjectId()
    name = StringField()
    lastname = StringField()
    shadow = StringField()
    birthdate = DateField()

    bills = ListField()
    address = ListField()
