package com.gonnaggstudio.directorhanmixer;

import android.content.res.AssetFileDescriptor;
import android.media.MediaPlayer;
import android.os.Bundle;
import android.support.design.widget.FloatingActionButton;
import android.support.design.widget.Snackbar;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.View;
import android.view.Menu;
import android.view.MenuItem;
import android.widget.AdapterView;
import android.widget.GridView;
import android.widget.SimpleAdapter;
import android.widget.Toast;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class MainActivity extends AppCompatActivity {

//
//    private String[] text = {"google", "facebook", "github", "instagram", "flicker", "twitter",
//            "pinterest", "部落格", "line", "wordpress", "homepage", "yahoo", "pchome", "pazzo", "youtube"};
    String filename[] = {
            "(清嗓).mp3",
            "Spiderman.mp3",
            "Undertable.mp3",
            "Underwear.mp3",
            "ㄜ.mp3",
            "一定.mp3",
            "三.mp3",
            "上.mp3",
            "下.mp3",
            "下台.mp3",
            "不好意思.mp3",
            "不要.mp3",
            "不要搞這一套.mp3",
            "並沒有.mp3",
            "了.mp3",
            "他.mp3",
            "但是.mp3",
            "你問.mp3",
            "你眼睛瞎了嗎.mp3",
            "你說誰.mp3",
            "倒過來.mp3",
            "假日.mp3",
            "像.mp3",
            "先.mp3",
            "全世界.mp3",
            "全部.mp3",
            "再一起.mp3",
            "勞工.mp3",
            "十萬.mp3",
            "半人半獸.mp3",
            "即.mp3",
            "即使.mp3",
            "可能.mp3",
            "可能嗎.mp3",
            "唱衰.mp3",
            "嘟.mp3",
            "嘲諷.mp3",
            "噓.mp3",
            "回答.mp3",
            "困難.mp3",
            "在.mp3",
            "在高雄.mp3",
            "大.mp3",
            "大家好.mp3",
            "太.mp3",
            "奮鬥.mp3",
            "奮鬥的過程.mp3",
            "好不好.mp3",
            "好不好2.mp3",
            "孤獨.mp3",
            "孩子.mp3",
            "完全沒有問題.mp3",
            "寒暑假.mp3",
            "射.mp3",
            "對不對.mp3",
            "小.mp3",
            "小寶貝.mp3",
            "小牙籤.mp3",
            "小瘪三.mp3",
            "屁.mp3",
            "屁眼.mp3",
            "帥.mp3",
            "弱勢族群.mp3",
            "征服宇宙.mp3",
            "後面來.mp3",
            "快.mp3",
            "思.mp3",
            "愛與包容.mp3",
            "感動.mp3",
            "感謝.mp3",
            "我.mp3",
            "我不是小學生.mp3",
            "我也不了解.mp3",
            "我們.mp3",
            "我想.mp3",
            "我為什麼要像小學生一樣站在這裡.mp3",
            "我覺得.mp3",
            "我覺得是沒有什麼幫助的.mp3",
            "我誠心的回答.mp3",
            "才是個屁.mp3",
            "找.mp3",
            "接受.mp3",
            "搞.mp3",
            "搞2.mp3",
            "放眼世界.mp3",
            "政治.mp3",
            "斯.mp3",
            "是個屁.mp3",
            "正.mp3",
            "比較.mp3",
            "沒有水準.mp3",
            "沒有辦法.mp3",
            "沒關係.mp3",
            "洗澡.mp3",
            "漫威.mp3",
            "漫威公司.mp3",
            "漫畫.mp3",
            "激.mp3",
            "無聊透頂.mp3",
            "然後.mp3",
            "然後勒.mp3",
            "生命力全部放出來.mp3",
            "生命力放出來以後.mp3",
            "發大財.mp3",
            "的.mp3",
            "監督.mp3",
            "看.mp3",
            "眼睛瞎了嗎.mp3",
            "硬.mp3",
            "立足台灣.mp3",
            "站在這裡.mp3",
            "站起來.mp3",
            "第一優先.mp3",
            "等等.mp3",
            "經.mp3",
            "老斯.mp3",
            "而且.mp3",
            "胸懷大陸.mp3",
            "自經區.mp3",
            "舒服.mp3",
            "行動.mp3",
            "覺得很感動.mp3",
            "觀光客.mp3",
            "認真.mp3",
            "誠心.mp3",
            "說.mp3",
            "說實在的.mp3",
            "護理師.mp3",
            "讓.mp3",
            "負.mp3",
            "財力.mp3",
            "質詢.mp3",
            "跳起來.mp3",
            "軍人.mp3",
            "較.mp3",
            "送小抄.mp3",
            "還沒有完全釋放出來.mp3",
            "那.mp3",
            "都是.mp3",
            "都會.mp3",
            "都要說.mp3",
            "醫生.mp3",
            "釋放出來.mp3",
            "重點.mp3",
            "野獸的行為.mp3",
            "鋼鐵人.mp3",
            "長.mp3",
            "長2.mp3",
            "關心.mp3",
            "阿.mp3",
            "雞.mp3",
            "雞腿.mp3",
            "非.mp3",
            "非常.mp3",
            "非常2.mp3",
            "非常神奇.mp3",
            "非常重要的.mp3",
            "韓國瑜.mp3",
            "館長.mp3",
            "高雄市市長.mp3",
            "高雄發大財.mp3",
            "高雄要發財.mp3",
            "魔鬼的誘惑.mp3",
            "黑韓國瑜.mp3"
    };

    List<Map<String, Object>> items = new ArrayList<>();
    MediaPlayer[] players;
    MediaPlayer backgroundPlayer;

    GridView grid;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        players = new MediaPlayer[filename.length];
        setContentView(R.layout.activity_main);
        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
        for(int i = 0; i < filename.length; ++i) {
            String t = filename[i];
            Map<String, Object> item = new HashMap<>();
            item.put("title", t.substring(0, t.length()-4));

            try {
                AssetFileDescriptor fd = getAssets().openFd(t);
                players[i] = new MediaPlayer();
                players[i].setDataSource(fd.getFileDescriptor(), fd.getStartOffset(), fd.getLength());
                players[i].prepare();
            } catch (IOException e) {
                e.printStackTrace();
            }

            items.add(item);
        }


        SimpleAdapter adapter = new SimpleAdapter(MainActivity.this, items, R.layout.grid_item, new String[]{"title"},
                new int[]{R.id.text});
        grid = (GridView) findViewById(R.id.grid);
        grid.setAdapter(adapter);
        grid.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
                //[+position] +的功用是?
//                Toast.makeText(MainActivity.this, "你選取了" + filename[position], Toast.LENGTH_SHORT).show();
                if(players[position].isPlaying())
                    players[position].seekTo(0);
                else
                    players[position].start();
            }
        });

        backgroundPlayer = MediaPlayer.create(this, R.raw.thuglifebeat90pm);
        backgroundPlayer.start();
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_main, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar grid_item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();

        //noinspection SimplifiableIfStatement
        if (id == R.id.action_settings) {
            return true;
        }

        return super.onOptionsItemSelected(item);
    }
}
