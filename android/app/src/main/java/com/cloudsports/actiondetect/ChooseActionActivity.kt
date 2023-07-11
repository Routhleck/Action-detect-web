package com.cloudsports.actiondetect

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import androidx.recyclerview.widget.GridLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.cloudsports.actiondetect.adapter.ActionAdapter
import com.cloudsports.actiondetect.data.Action


class ChooseActionActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.fragment_sport_center)

        val recyclerView: RecyclerView = findViewById(R.id.recyclerView)
        val layoutManager = GridLayoutManager(this, 2)
        recyclerView.layoutManager = layoutManager
        val actions = listOf(
            Action(R.drawable.sports_pullup, "引体向上", name = "pullUp"),
            Action(R.drawable.sports_pushup, "俯卧撑", name = "pushUp"),
            Action(R.drawable.sports_situp, "仰卧起坐", name = "sitUp"),
            Action(R.drawable.sports_squat, "深蹲", name = "squat"),
            // 添加更多的 actions
        )
        val adapter = ActionAdapter(actions)
        recyclerView.adapter = adapter
    }
}
