# GitHub-এ Remotion ভিডিও রেন্ডার — বাংলা নির্দেশনা

এই ZIP-এ Remotion source code এবং GitHub Actions render workflow আছে। ফোনে Remotion ইনস্টল করার দরকার নেই।

## একবারের সেটআপ

1. GitHub-এ `New repository` চাপুন।
2. Repository name দিন: `claude-ai-remotion`
3. Public বা Private বেছে `Create repository` চাপুন।
4. Repository-তে `Add file` → `Upload files` নির্বাচন করুন।
5. এই ZIP extract করে ভেতরের সব ফাইল/ফোল্ডার upload করুন। `.github` ফোল্ডারটি বাদ দেবেন না।
6. `Commit changes` চাপুন।

## ভিডিও রেন্ডার

1. Repository-র `Actions` tab খুলুন।
2. বাম পাশ থেকে `Render Remotion video` বেছে নিন।
3. `Run workflow` চাপুন।
4. কাজ শেষ হলে সবুজ checkmark আসবে।
5. Run-এর নিচে `Artifacts` থেকে `claude-ai-golam-mostafa-mp4` ডাউনলোড করুন।
6. ZIP extract করলে MP4 পাবেন।

## গুরুত্বপূর্ণ

- এই workflow GitHub Actions-এ Node.js, Bengali font ও Remotion browser install করে।
- MP4 artifact ৭ দিন GitHub-এ রাখা হবে।
- বর্তমানে narration audio নেই; অ্যানিমেশন ও বাংলা ক্যাপশন থাকবে।
