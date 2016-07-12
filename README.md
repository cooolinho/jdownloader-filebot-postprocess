# jdownloader-filebot-postprocess
Filme und Serien mit jDownloader am herunterladen? Diese Scripts helfen dir dabei nach erfolgreichem **Download und Entpacken** die Dateien mithilfe von Filebot umzubenennen und anschließend in die Mediathek zu verschieben.

## Installation
##### Systemumgebungsvariablen erstellen

* **JD_HOME** - jDownloader Installationsverzeichnis (C:\Users\cooolinho\AppData\Local\JDownloader 2.0)
* **MEDIATHEK_HOME** - Mediathek Hauptverzeichnis (D:\Mediathek)
```cmd
$ setx JD_HOME path/to/jdownloader
```
```cmd
$ setx MEDIATHEK_HOME path/to/mediathek
```

##### Filebot Datei verschieben
Die Datei ***filebot-process.cmd*** in den **JD_HOME** Ordner verschieben.

##### jDownloader einrichten
1. Plugin: Ereignismanager installieren
2. Neuen Trigger ***Archiventpacken beendet*** erstellen
3. Trigger: auf **Script bearbeiten** klicken
4. Inhalt von ***jdownloader-archiv-trigger.js*** kopieren und speichern
5. Trigger aktivieren

## Log
Filebot speichert Log-Informationen in eine .log Datei. Diese befindet sich unter:
```cmd
C:\Users\<BENUTZER>\AppData\Roaming\FileBot\logs\amc.log
```

License
----

MIT