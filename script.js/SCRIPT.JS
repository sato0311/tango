let wordDict = {};
let selectedFile = localStorage.getItem('selectedFile'); // 選択されたファイル名を取得

// ページ読み込み時にファイルごとの単語リストを読み込む
window.onload = function() {
    if (!selectedFile) {
        alert("ファイルが選択されていません。");
        window.location.href = "fileSelection.html"; // ファイル選択ページにリダイレクト
    } else {
        document.getElementById('fileName').textContent = `ファイル名: ${selectedFile}`; // ファイル名を表示
        loadWords();  // 単語リストを読み込み
        displayWords();  // 単語リストを表示
    }
}

// 単語を追加する関数
function addWord() {
    const word = document.getElementById('word').value;
    const meaning = document.getElementById('meaning').value;
    if (word && meaning) {
        wordDict[word] = meaning;
        document.getElementById('word').value = '';
        document.getElementById('meaning').value = '';

        // 選択されたファイルに単語リストを保存
        saveWords();
        alert('単語が追加されました');
        displayWords();  // 単語リストを更新して表示
    } else {
        alert('単語と意味を入力してください');
    }
}

// 単語リストを表示する関数
function displayWords() {
    const tableBody = document.getElementById('wordTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';
    for (const [word, meaning] of Object.entries(wordDict)) {
        const row = tableBody.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        cell1.textContent = word;
        cell2.textContent = meaning;
    }
}

// 単語リストをローカルストレージに保存する関数
function saveWords() {
    localStorage.setItem(`words_${selectedFile}`, JSON.stringify(wordDict));
}

// ページ読み込み時に単語リストをローカルストレージからロードする関数
function loadWords() {
    const savedWords = localStorage.getItem(`words_${selectedFile}`);
    if (savedWords) {
        wordDict = JSON.parse(savedWords);
    }
}



let users = JSON.parse(localStorage.getItem('users')) || {}; // ユーザーIDとパスワードを保存する仮のデータベース

// ページが読み込まれた時にログアウトして、ログイン画面を表示する
window.onload = function() {
    localStorage.removeItem('loggedInUser'); // ログアウト状態にする
    showLogin(); // ログイン画面を表示
};

// アカウント作成機能
function signUp() {
    const userId = document.getElementById('newUserId').value;
    const password = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    const regex = /^[a-zA-Z0-9]{6,10}$/;

    if (!regex.test(userId)) {
        alert("ユーザーIDは6〜10文字の半角英数字にしてください。");
        return;
    }

    if (!regex.test(password)) {
        alert("パスワードは6〜10文字の半角英数字にしてください。");
        return;
    }

    if (password !== confirmPassword) {
        alert("パスワードが一致しません。再確認してください。");
        return;
    }

    // ユーザーデータをローカルストレージに保存
    if (localStorage.getItem(userId)) {
        alert("このユーザーIDは既に存在します。別のIDを使用してください。");
    } else {
        localStorage.setItem(userId, password);
        alert("アカウントが作成されました！");
        showLogin(); // アカウント作成後にログイン画面に戻る
    }
}

// ログイン機能
function login() {
    const userId = document.getElementById('loginUserId').value;
    const password = document.getElementById('loginPassword').value;

    // ローカルストレージからデータを取得
    const storedPassword = localStorage.getItem(userId);

    if (storedPassword && storedPassword === password) {
        alert("ログイン成功！");
        // ファイルページにリダイレクト
        window.location.href = "fileSelection.html"; // fileSelection.html にリダイレクト
        localStorage.setItem('loggedInUser', userId); // ログイン状態を記憶
    } else {
        alert("ユーザーIDまたはパスワードが正しくありません。");
    }
}

// ページ読み込み時にログイン状態を確認
window.onload = function() {
    // 毎回ログイン状態をリセット（これにより毎回ログイン画面が表示される）
    localStorage.removeItem('loggedInUser'); // ログイン状態をクリア
    showLogin(); // ログイン画面を表示
};


// ログイン画面を表示する関数
function showLogin() {
    document.getElementById('login-section').style.display = 'block';
    document.getElementById('signup-section').style.display = 'none';
}

// アカウント作成画面を表示する関数
function showSignUp() {
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('signup-section').style.display = 'block';
}


