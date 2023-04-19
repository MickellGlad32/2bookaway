FROM python
EXPOSE 5000
WORKDIR /app
RUN pip install flask
COPY . .
CMD ["python3", "-m", "flask", "run", "--host=0.0.0.0"]