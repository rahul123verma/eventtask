<?php

class Task_model extends CI_Model {

    public $id;
    public $title;
    public $discription;
    public $STAT;

    public function __construct()
    {
        // Call the CI_Model constructor
        parent::__construct();
    }

    public function get_tasks_entries()
    {

        return $this->db->count_all('task');
    }
    public function get_data()
    {
        $total_row = intval($this->db->count_all('task'));
        if($total_row<=10)
        {
            $from_last = 0;
            $till_rows = $total_row;
        }
        elseif( $total_row -((intval($this->input->post('offset'))+1)*10)<=0)
        {
            $from_last = 0;
            $till_rows = 10+ ($total_row -((intval($this->input->post('offset'))+1)*10));
        }
        else{
            $from_last = $total_row -((intval($this->input->post('offset'))+1)*10);
            $till_rows = 10;
        }

        $this->db->from('task');

        $this->db->limit($till_rows,$from_last);
//       / $this->db->order_by("id", "desc");
        $query = $this->db->get();


        return $query->result();

    }
    public function insert_task()
    {
        if($this->input->post('STAT')== "true")
        {
            $idvalue = 1;
        }
        else{
            $idvalue = 0;
        }
        $this->title = $this->input->post('title');
        $this->discription  = $this->input->post('discription');
        $this->STAT = $idvalue;

        return $this->db->insert('task', $this);
    }

    public function update_current_task()
    {
        if($this->input->post('STAT')== "true" || ($this->input->post('STAT')=="1"))
        {
            $idvalue = 1;
        }
        else{
            $idvalue = 0;
        }
        $this->id    = intval($this->input->post('id'));
        $this->title = $this->input->post('title');
        $this->discription  = $this->input->post('discription');
        $this->STAT = $idvalue;
        //$var=$this->input->post('STAT');

       // $this->id = inval($this->input->post('id'));
       // $this->title = "changed2";
         //$this->discription  = "changed des";
        // $this->STAT = 0;
        //try{
       //    $result =
       // }
       // catch(Exception $e) {
       //     $result = $e->getMessage();
       // }
       //
       return  $this->db->update('task', $this, array('id' => $this->id));
    }
    function get_current_task()
    {
       return $row = $this->db->get_where('task', array('id' => intval($this->input->post('id'))))->row();
        //print_r($row);
    }

}