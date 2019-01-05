#!/bin/sh

echo "Deploying..."

dst_root=/media/work/Workspace/Personal_Projects/ProjFS/BE_EMS/src/webapp
dst_fld=${dst_root}/resources/FrontPage
dst_static=${dst_root}/resources/FrontPage/static
dst_view=${dst_root}/Views/FrontPage

src=./dist

if [ -d ${dst_static} ]
then
echo "${dst_static} exists"
else
echo "mkdir -p ${dst_static}"
mkdir -p ${dst_static}
fi

if [ -d ${dst_view} ]
then
echo "${dst_view} exists"
else
echo "mkdir -p ${dst_view}"
mkdir -p ${dst_view}
fi

echo "Copying Files..."
cp -r ${src}/resources/* ${dst_root}/resources
cp ${src}/static/* ${dst_static}
cp ${src}/*.js ${dst_fld}
cp ${src}/*.css ${dst_fld}
cp ${src}/*.html ${dst_view}

echo "Deployment Completed"