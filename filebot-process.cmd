@ECHO OFF

:: Input Parameters
set ARG_PATH=%1
set ARG_NAME=%2
set ARG_LABEL=%3

:: Configuration
set CONFIG_OUTPUT=%MEDIATHEK_HOME%

filebot -script fn:amc --output %CONFIG_OUTPUT% --lang de --action move --conflict skip -non-strict --log-file amc.log --def "seriesFormat=Serien/{n}/Staffel {s}/{n} - {s00e00} - {t}" "movieFormat=HD-Filme/{n}/{n}" skipExtract=y unsorted=y music=y artwork=y ut_dir=%ARG_PATH% ut_kind=multi ut_title=%ARG_NAME% ut_label=%ARG_LABEL%
