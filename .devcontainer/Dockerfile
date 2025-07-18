# Alpine Linux 기반 Node.js 20 이미지 (보안 취약점 최소화)
FROM node:20-alpine

# Alpine용 패키지 설치
RUN apk update && apk upgrade && \
    apk add --no-cache \
    git \
    vim \
    tzdata \
    wget \
    unzip \
    bash

# 환경 변수 설정 (필요에 따라 수정)
ENV LANG=C.UTF-8 \
    LC_ALL=C.UTF-8
#     DEBIAN_FRONTEND=noninteractive
# RUN localedef -i ko_KR -f UTF-8 ko_KR.UTF-8
# ENV LANG=ko_KR.UTF-8
# ENV LANGUAGE=ko_KR.UTF-8
# ENV LC_ALL=ko_KR.UTF-8
# ENV LC_CTYPE=ko_KR.UTF-8
# ENV LC_MESSAGES=ko_KR.UTF-8

# 시스템시간 KST로 변경 (Alpine용)
RUN ln -sf /usr/share/zoneinfo/Asia/Seoul /etc/localtime
RUN echo "Asia/Seoul" > /etc/timezone

# RUN npm install
# RUN apt install -y openjdk-21-jdk-headless
# Java 환경 변수 설정
# ENV JAVA_HOME=/usr/lib/jvm/java-21-openjdk-amd64
# ENV PATH="$JAVA_HOME/bin:$PATH"

# 작업 디렉토리 설정
WORKDIR /app

# 컨테이너가 종료되지 않도록 유지
CMD ["tail", "-f", "/dev/null"]