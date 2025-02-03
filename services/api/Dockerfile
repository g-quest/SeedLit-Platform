FROM python:3.12
LABEL project=seedlit
WORKDIR /code
COPY ./requirements.txt /code/requirements.txt
RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt
COPY ./app /code/app

# This line is essential if you want your app to auto restart after every change
# https://github.com/encode/uvicorn/discussions/1893
ENV PYTHONPATH "/"

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "3001", "--reload"]