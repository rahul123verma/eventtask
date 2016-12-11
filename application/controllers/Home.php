<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends CI_Controller {

    /**
     *
     * @see https://codeigniter.com/user_guide/general/urls.html
     */
    public function index()
    {


        $this->load->helper('url');
        $this->load->view('inc/header');
        $this->load->view('home/index');
        $this->load->view('inc/footer');
    }

    public function model_index()
    {
        $this->load->model('Task_model');
       echo json_encode($this->Task_model->get_tasks_entries());
    }
    public function task_index()
    {

        $this->load->model('Task_model');
        $result= $this->Task_model->get_data();

        echo json_encode( $result) ;
    }
    public function get_current_task()
    {
        $this->load->model('Task_model');
        $result = $this->Task_model->get_current_task();
        echo json_encode( $result);
    }

    public function update_current_task()
    {
        $this->load->model('Task_model');
        $result = $this->Task_model->update_current_task();
        echo json_encode( $result);

    }

    public function insert_task()
    {
        $this->load->model('Task_model');
        $result = $this->Task_model->insert_task();
        echo json_encode( $result);
    }


}