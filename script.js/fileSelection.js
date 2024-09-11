// ファイルを選択した時に実行される関数
function selectFile(fileName) {
    // 選択したファイル名をローカルストレージに保存
    localStorage.setItem('selectedFile', fileName);

    // ファイル名に応じてページを遷移
    if (fileName === 'ファイル１') {
        console.log('ファイル1が選択されました');
        window.location.href = 'index.html'; // ファイル1 → index.htmlに遷移
    } else if (fileName === 'ファイル２') {
        console.log('ファイル2が選択されました');
        window.location.href = 'index2.html'; // ファイル2 → index2.htmlに遷移
    } else if (fileName === 'ファイル３') {
        console.log('ファイル3が選択されました');
        window.location.href = 'index3.html'; // ファイル3 → index3.htmlに遷移
    } else {
        console.error('不明なファイルが選択されました:', fileName);
    }
}

// ページが読み込まれた時にファイルの選択状態を確認
window.onload = function() {
    const selectedFile = localStorage.getItem('selectedFile');
    if (selectedFile) {
        console.log('前回選択されたファイル:', selectedFile);
    }
};

