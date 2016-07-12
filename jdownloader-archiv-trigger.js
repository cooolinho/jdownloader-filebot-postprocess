var script = JD_HOME + '/filebot-process.cmd'

var links = archive.getDownloadLinks() ? archive.getDownloadLinks() : []
var package = links.length > 0 ? links[0].getPackage() : null


function isReallyFinished() {
    for (var i = 0; i < links.length; i++) {
        if (links[i].getArchive() != null && links[i].getExtractionStatus() != "SUCCESSFUL" || !package.isFinished()) {
            return false
        }
    }
    return true
}

if (package && isReallyFinished()) {
    var path = archive.getExtractToFolder()
    var name = package.getName()
    var label = package.getComment() ? package.getComment() : 'N/A'
    var command = [script, path, name, label, 'PACKAGE_FINISHED']

    log(command)
    log(callSync(command))
} else {
    log("Script-Editor: 'Filebot: Downloaded Files ...' not really finished!")
}